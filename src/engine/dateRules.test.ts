import {describe,expect,it} from 'vitest';
import {buildSelected,lunarFromSolar,solarFromLunar,validLunar} from './dateRules';
describe('date synchronization',()=>{
 it('converts solar to lunar',()=>{const d=new Date(2026,9,27);const l=lunarFromSolar(d);expect(l.year).toBeGreaterThan(1900);expect(l.day).toBeGreaterThan(0)});
 it('converts lunar back to the same solar date',()=>{const d=new Date(2026,9,27);const l=lunarFromSolar(d);const back=solarFromLunar(l.year,l.month,l.day,l.isLeap);expect(back.getFullYear()).toBe(d.getFullYear());expect(back.getMonth()).toBe(d.getMonth());expect(back.getDate()).toBe(d.getDate())});
 it('keeps a single selected date source',()=>{const x=buildSelected(new Date(2024,1,29,23,30));expect(x.solar.getDate()).toBe(29);expect(x.hourBranch).toBe(11)});
 it('rejects impossible lunar days',()=>{expect(validLunar(2026,1,31)).toBe(false)});
});
