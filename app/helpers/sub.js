import { helper } from '@ember/component/helper';

export function sub([param1, param2]/*, hash*/) {
  return param1 - param2
}

export default helper(sub);
