import{describe,expect,it}from'vitest';import{calculate}from'./divination';
const input=(month:number,day:number,hourBranch:number)=>({solar:new Date(2026,0,1),lunarYear:2026,lunarMonth:month,lunarDay:day,isLeapMonth:false,hourBranch,minute:0});
describe('小六壬六宫 v1',()=>{it('正月初一子时：月日时同宫大安',()=>{expect(calculate(input(1,1,0)).values).toEqual([0,0,0])});it('二月初一子时：留连',()=>{expect(calculate(input(2,1,0)).values).toEqual([1,1,1])});it('月日时连续顺推',()=>{expect(calculate(input(6,3,9)).values).toEqual([5,1,5])});it('六宫循环边界',()=>{expect(calculate(input(12,30,11)).values).toEqual([5,4,3])})});
