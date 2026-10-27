import {PALACES} from './divination';
const meaning:Record<string,{trend:string;state:string;block:string;advice:string}>= {
 大安:{trend:'整体趋于稳定，适合按计划推进。',state:'当前重心在守成与稳步积累。',block:'过度保守可能让机会变慢。',advice:'先把基础工作做好，少做冲动改变。'},
 留连:{trend:'事情容易反复，进展需要耐心。',state:'当前处于等待、牵连或信息未齐状态。',block:'沟通不充分、流程拖延。',advice:'保留余地，核实信息后再定。'},
 速喜:{trend:'消息和变化较快，容易出现阶段性进展。',state:'当前适合及时行动与回应。',block:'过快决定可能忽略细节。',advice:'抓住窗口，同时保留复核步骤。'},
 赤口:{trend:'过程中的冲突和口舌需要重点留意。',state:'当前更考验边界、表达与证据。',block:'误解、争执或情绪化沟通。',advice:'重要事项尽量书面确认，避免激烈表达。'},
 小吉:{trend:'有小幅改善和助力，适合稳步积累。',state:'当前容易得到有限但实际的支持。',block:'目标过大时会分散精力。',advice:'把大目标拆成可执行的小步骤。'},
 空亡:{trend:'结果暂不明朗，现阶段不宜仓促下结论。',state:'当前可能存在信息缺口或预期落空。',block:'资源、时间或关键条件不足。',advice:'先补信息、做验证，再决定是否投入。'}
};
export function interpret(values:number[]){const names=values.map(i=>PALACES[i]);const a=meaning[names[2]];return {names,overall:`三传为${names.join(' → ')}。${a.trend}`,state:a.state,obstacle:a.block,advice:a.advice,summary:`初传${names[0]}代表事情起点，中传${names[1]}代表过程变化，末传${names[2]}代表当前收束与后续倾向。`};}
export function palaceInterpretation(name:string){return meaning[name]??{trend:'暂无该宫位的解析资料。',state:'信息不足。',block:'规则资料不足。',advice:'请结合现实情况判断。'};}
