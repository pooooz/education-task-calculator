import { createCommand } from 'utils/calculator';
import { convertToPostfix, evaluatePostfix } from 'utils/rpnEval';

const calc = (x) => evaluatePostfix(convertToPostfix(x));
const CalculateCommand = createCommand(calc);

export const commands = { CalculateCommand };
