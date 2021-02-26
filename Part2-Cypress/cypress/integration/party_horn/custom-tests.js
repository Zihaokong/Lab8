describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });


  it("slider changes when volume input changes", () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75)
    })
  })


  it("input changes when slider changes as well", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input")

    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33)
    })
  })


  it("volume changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input")
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop("volume", 0.33)
    })
  })

  // click button and change sound and picture
  it("check image and sound change car horn", () => {
    cy.get("#radio-air-horn").click()
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/air-horn.mp3")
    })

    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/air-horn.svg")
    })
  })

  it("check image and sound change car horn", () => {
    cy.get("#radio-car-horn").click()
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/car-horn.mp3")
    })

    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/car.svg")
    })

  })

  it("check image and sound change party horn", () => {
    cy.get("#radio-party-horn").click()
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3")
    })

    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg")
    })
  })

  it("check volume image changes", () => {
    cy.get("#volume-slider").invoke("val", 0).trigger("input")
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-0.svg")
    })

    cy.get("#volume-slider").invoke("val", 1).trigger("input")
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-1.svg")
    })

    cy.get("#volume-slider").invoke("val", 50).trigger("input")
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-2.svg")
    })

    cy.get("#volume-slider").invoke("val", 99).trigger("input")
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-3.svg")
    })
  })

    it("check honk button disabled", () => {
      cy.get("#volume-number").invoke("val", "").trigger("input")
      cy.get("#honk-btn").then(($el) => {
        expect($el).to.have.attr("disabled", "disabled")
      })

      cy.get("#volume-number").invoke("val", "fff").trigger("input")
      cy.get("#honk-btn").then(($el) => {
        expect($el).to.have.attr("disabled", "disabled")
      })

      cy.get("#volume-number").invoke("val", "3").trigger("input")
      cy.get("#honk-btn").then(($el) => {
        expect($el).to.not.have.attr("disabled")
      })

      it("testing error shown", () =>{
        cy.get("#volume-number").invoke("val", "1111").trigger("input");
        cy.get("#volume-number:invalid").should("exist");
        cy.get("#volume-number").invoke("val", "33").trigger("input");
        cy.get("#volume-number:invalid").should("not.exist");
      })

    })




});
