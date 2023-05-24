class Excel{
    get hunches() {
        return this._hunches;
    }

    set hunches(value) {
        this._hunches = value;
    }

    get params() {
        return this._params;
    }

    set params(value) {
        this._params = value;
    }
    constructor(sheet) {
        this.sheet=sheet
        this._hunches=[]
        this._params=[]
    }

}