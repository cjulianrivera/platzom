const expect = require('chai').expect
const platzom = require('..').default

describe ('#platzom',function (){

    it('Si la palabra termina en "ar" se le quitan los dos caracteres', function (){
        const translation = platzom('programar')
        expect(translation).to.equal('program')
    })

    it('Si la palabla inicia con z se añade pe', function (){
        const translation = platzom('zorro')
        expect(translation).to.equal('zorrope')

        const translation1 = platzom('zarpar')
        expect(translation1).to.equal('zarppe')
    })

    it('Si la palaba traducida tiene 10 o mas letras, se debe partir con un guion', function (){
        const translation = platzom('abecedario')
        expect(translation).to.equal('abece-dario')
    })

    it('Si la palabra original es un palindrome ninguna regla anterion cuenta se intercambian mayusculas y minusculas', function (){
        const translation = platzom('sometemos')
        expect(translation).to.equal('SoMeTeMoS')
    })

})