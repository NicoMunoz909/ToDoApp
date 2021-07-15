import {View} from './view.js'
import {Model} from './model.js'

const Controller = (() => {

    const view = View();
    const model = Model();

    view.loadSidebar();
    
})();

export {Controller}