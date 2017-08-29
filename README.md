#Platzom

Platzom es un idioma inventado para el [curso de fundamentos de JavaScript](https://platzi.com/js) de Platzi

## Descripción del idioma

- Si la palabra termina en "ar" se le quitan los dos caracteres
- Si la palabla inicia con z
- Si la palaba traducida tiene 10 o mas letras
- Si la palabra original es un palindrome ninguna regla anterion cuenta se intercambian mayusculas y minusculas

## Instalación
```
npm install platzom
```

## Uso
```
import platzom from 'platzom'
console.log (platzom('Programar'));
console.log (platzom('Zorro'));
console.log (platzom('Zarpar'));
console.log (platzom('abecedario'));
console.log (platzom('sometemos'));
```

