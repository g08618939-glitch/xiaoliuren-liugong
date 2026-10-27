import { Lunar, Solar, LunarYear } from 'lunar-javascript';

export type SelectedDateTime = { solar: Date; lunarYear: number; lunarMonth: number; lunarDay: number; isLeapMonth: boolean; hourBranch: number; minute: number };
export const BRANCHES = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
export const BRANCH_RANGES = ['23:00–01:00','01:00–03:00','03:00–05:00','05:00–07:00','07:00–09:00','09:00–11:00','11:00–13:00','13:00–15:00','15:00–17:00','17:00–19:00','19:00–21:00','21:00–23:00'];
export function lunarFromSolar(date: Date) { const l = Solar.fromDate(date).getLunar(); return { year:l.getYear(), month:Math.abs(l.getMonth()), day:l.getDay(), isLeap:l.getMonth()<0 }; }
export function solarFromLunar(year:number, month:number, day:number, leap=false): Date { const l = Lunar.fromYmd(year, leap ? -Math.abs(month) : Math.abs(month), day); const s=l.getSolar(); return new Date(s.getYear(), s.getMonth()-1, s.getDay()); }
export function leapMonth(year:number): number { return LunarYear.fromYear(year).getLeapMonth(); }
export function daysInLunarMonth(year:number, month:number, leap=false): number { const start=solarFromLunar(year,month,1,leap); const next=solarFromLunar(year, month===12?1:month+1,1, month===12?false:leap); return Math.max(29, Math.min(30, Math.round((next.getTime()-start.getTime())/86400000))); }
export function validLunar(year:number, month:number, day:number, leap=false) { try { const max=daysInLunarMonth(year,month,leap); const s=solarFromLunar(year,month,day,leap); return day>=1&&day<=max&&s instanceof Date&&!Number.isNaN(s.getTime()); } catch { return false; } }
export function buildSelected(date:Date):SelectedDateTime { const l=lunarFromSolar(date); return {solar:date,lunarYear:l.year,lunarMonth:l.month,lunarDay:l.day,isLeapMonth:l.isLeap,hourBranch:Math.floor(date.getHours()/2)%12,minute:date.getMinutes()}; }
