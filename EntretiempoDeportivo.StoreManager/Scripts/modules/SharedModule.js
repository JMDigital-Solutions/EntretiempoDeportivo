export default class SharedModule {
    constructor() {
        this.init();
    }

    init() {
        $('select').material_select();
    }
};