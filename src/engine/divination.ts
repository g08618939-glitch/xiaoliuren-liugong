import type {SelectedDateTime} from './dateRules';
export const PALACES=['大安','留连','速喜','赤口','小吉','空亡'];
const mod=(n:number)=>((n-1)%6+6)%6;
export function calculate(input:SelectedDateTime){ const seed=input.solar.getDate()+input.hourBranch+input.lunarMonth; const values=[input.lunarMonth,input.solar.getDate(),input.hourBranch+1].map(x=>mod(x+seed)); return {input, values, initial:PALACES[values[0]], middle:PALACES[values[1]], final:PALACES[values[2]], rule:'公历日期对应农历月 + 公历日 + 十二时辰；三传按六宫循环连续推算。'}; }
