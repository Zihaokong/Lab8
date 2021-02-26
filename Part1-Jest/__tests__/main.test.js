
const format = require("../assets/scripts/main")
describe("formatVolumeIconPath Test", () => {
    test("volume 0", () => {
        expect(format(0)).toContain(`./assets/media/icons/volume-level-0.svg`)
    })

    test("volume 1", () => {
        expect(format(1)).toContain(`./assets/media/icons/volume-level-1.svg`)
    })

    test("volume 34", () => {
        expect(format(34)).toContain(`./assets/media/icons/volume-level-2.svg`)
    })

    test("volume 80", () => {
        expect(format(80)).toContain(`./assets/media/icons/volume-level-3.svg`)
    })
})