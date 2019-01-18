import system from './system'
import customer from './customer'
import student from './student'

let dynamicRouterMap = (system.concat(customer)).concat(student);
export default dynamicRouterMap;