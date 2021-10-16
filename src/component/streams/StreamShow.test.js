const rewire = require("rewire")
const StreamShow = rewire("./StreamShow")
const mapStateToProps = StreamShow.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ streams: 12345 }, "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ streams: "da7588892" }, "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ streams: "da7588892" }, "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ streams: "da7588892" }, "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ streams: "bc23a9d531064583ace8f67dad60f6bb" }, "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
