import type {SelectedDateTime} from './dateRules';
import {PALACE_CONFIG} from './palaceConfig';
export const PALACES=PALACE_CONFIG.map(x=>x.name);
const modIndex=(n:number)=>((n%6)+6)%6;
export function calculate(input:SelectedDateTime){
  const monthIndex=modIndex(input.lunarMonth-1);
  const dayIndex=modIndex(monthIndex+input.lunarDay-1);
  const hourIndex=modIndex(dayIndex+input.hourBranch);
  const values=[monthIndex,dayIndex,hourIndex];
  return {input,values,initial:PALACES[monthIndex],middle:PALACES[dayIndex],final:PALACES[hourIndex],rule:'连续顺数：月宫=(农历月-1)%6；日宫=(月宫+农历日-1)%6；时宫=(日宫+时辰序号)%6；初传=月宫，中传=日宫，末传=时宫。'};
}
