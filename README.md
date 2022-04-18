
# Gilded Rose kata solution in typescript

Dentro del repositorio por ahora la única soluión disponible está desarrolada con typescript utilizando dos métodos diferentes:

- Funcional, haciendo refactor para bajar la complejidad ciclomática
- Utilizando OOP y haciendo uso de principios SOLID sin modificar la clase Item

# Especificaciones de la Rosa Dorada (Gilded Rose)

Bienvenido al equipo de **Gilded Rose**.
Como quizá sabes, somos una pequeña posada ubicada estratégicamente en una prestigiosa ciudad, atendida por la amable **Allison**.
También compramos y vendemos mercadería de alta calidad.
Por desgracia, nuestra mercadería va bajando de calidad a medida que se aproxima la fecha de venta.

Tenemos un sistema instalado que actualiza automáticamente el `inventario`.
Este sistema fue desarrollado por un muchacho con poco sentido común llamado Leeroy, que ahora se dedica a nuevas aventuras.
Tu tarea es agregar una nueva característica al sistema para que podamos comenzar a vender una nueva categoría de items.

## Descripción preliminar

Pero primero, vamos a introducir el sistema:

* Todos los artículos (`Item`) tienen una propiedad `sellIn` que denota el número de días que tenemos para venderlo
* Todos los artículos tienen una propiedad `quality` que denota cúan valioso es el artículo
* Al final de cada día, nuestro sistema decrementa ambos valores para cada artículo mediante el método `updateQuality`

Bastante simple, ¿no? Bueno, ahora es donde se pone interesante:

* Una vez que ha pasado la fecha recomendada de venta, la `calidad` se degrada al doble de velocidad

* La `calidad` de un artículo nunca es negativa

* La `calidad` de un artículo nunca es mayor a `50`


* El "Queso Brie envejecido" (`Aged brie`) incrementa su `calidad` a medida que se pone viejo
  * Su `calidad` aumenta en `1` unidad cada día
  * luego de la `fecha de venta` su `calidad` aumenta `2` unidades por día



* El artículo "Sulfuras" (`Sulfuras`), siendo un artículo legendario, no modifica su `fecha de venta` ni se degrada en `calidad`


* Una "Entrada al Backstage", como el queso brie, incrementa su `calidad` a medida que la `fecha de venta` se aproxima
  * si faltan 10 días o menos para el concierto, la `calidad` se incrementa en `2` unidades
  * si faltan 5 días o menos, la `calidad` se incrementa en `3` unidades
  * luego de la `fecha de venta` la `calidad` cae a `0`

## El requerimiento

Hace poco contratamos a un proveedor de artículos *conjurados mágicamente*.
Esto requiere una actualización del sistema:

* Los artículos `conjurados` degradan su `calidad` al doble de velocidad que los normales

Siéntete libre de realizar cualquier cambio al mensaje `updateQuality` y agregar el código que sea necesario, mientras que todo siga funcionando correctamente. Sin embargo, **no alteres el objeto `Item` ni sus propiedades** ya que pertenecen al goblin que está en ese rincón, que en un ataque de ira te va a liquidar de un golpe porque no cree en la cultura de código compartido.

## Notas finales

Para aclarar: un artículo nunca puede tener una `calidad` superior a `50`, sin embargo las Sulfuras siendo un artículo legendario posee una calidad inmutable de `80`.


#### Java Solution
- [CodelyTV Java Solution](https://github.com/CodelyTV/java-gildedrose-kata)

# Conceptso sobre SOLID

Los principios SOLID son una serie de convenciones y prácticas ampliamente aceptadas por la industria del desarrollo de software. **La finalidad de estos principios de diseño de software es conseguir un código más mantenible, robusto, y tolerante a cambios.** Con una alta cohesión en nuestras clases, pero un bajo acoplamiento entre ellas.


- 🕺 Principio de Responsabilidad Única:
    El primero de los principios SOLID: SRP (Single Responsaibility Principle). El RSP no quiere decir que una clase tenga un único método pero si que lo que se expone sea solo uno. De forma interna una clase puede tener más de una función pero las razones por las cuales cambiar deberían depende únicamente de una cosa (vendrá dada por el contexto y por lo que la clase tenga que hacer). De esta forma conseguimos que si hay algo que se tiene que cambiar podemos identificar perfectamente cual de ellas es. **¿Tenemos que aplicar esto siempre?** De libro sería un si, pero para casos simples aplicar abstracciones no necesarias puede añadir complejidad que no necesitamos. Para casos simples, se puede hacer uso del paradigma de la programación funcional que nos ayuda aplciar esto de una forma muy simple y sin tanto boilerplate.

- 🤯 Principio de Abierto/Cerrado:
    Analizamos el OCP (Open Close Principle). El Software debería estar abierto a extensión y cerrado a modificación. Esto aplica tanto a clases internas,dominio, funciones, servicios,etc. Para evitar esto es tan fácil evitar depender(*importar*) de las implementaciones *Clases o funcionaes directas*  utilizando **types e interfazes**. 

    - *Conclusión*
        ¿Cuándo usamos Interfaces?: Cuando vayamos a desacoplar entre capas
        ¿Cuándo usamos Abstract?: En determinados casos para Modelos de dominios

- 🔁 Principio de sustitución de Liskov:
    Quizás uno de los principios más difíciles de asimilar. La finalidad es asegurarnos que al utilizar heréncia no rompemos **OCP**. Esto se transmite en que el padre debería poder implementar el hijo ya que este es una heréncia de el, por lo que si hacemos un cambio en el constructor del hijo que haga que esto no sea posible estaríamos incumpliendo el principio. Esta ley se utiliza para heréncia y siempre que sea posible mejor utilzizar *composición (Composition over Inheritance)*

- 💥 Principio de segregación de interfaces:
    El ISP es uno de los principios más fáciles de malinterpretar y pensar que es sencillo. Este principio nos ayuda a hacer que **nuestro clientes (i.e: casos de uso) dependen de interfazes y no de la implementación de estas**. Utilizar este patrón no quire decir unicamente crer todos los método y generar las interfaces utilizando el header de estas, sinó definir las interfazes a través de las necesidades de cliente y después ir bajando hasta llegar a la implementación.

- 🤹‍♀️ Principio de inversión de dependencias:
    AKA: Santo Grial de la Arquitectura Hexagonal. Este principio nos dice que:
    módulos de alto nivel no deberían depender de los de bajo nivel. Ambos deberían depender de abstracciones. Esto se puede conseguir **generando abstracciones de nuestros casos de uso, repositorios,etc**. Y estos injectarlos por constructor o parámetro (si estamos en funcional). Utilizarlo nos ayuda a que sabemos que es lo que necesitamos por entrada y que es lo que nos va a dar y utilizando buen naming que es lo que la función hace, sin darnos una implementación específica que nos permite utilizarla en múltiples casos.


## Recuros para ampliar la información

- [Principios SOLID | BetaTech](https://www.youtube.com/watch?v=2X50sKeBAcQ)
- [Errores comunes al diseñar Interfaces - #SOLID - ISP](https://www.youtube.com/watch?v=mDAQLkdNGHU)
- [Curso SOLID CodelyTVPro](https://pro.codely.tv/library/principios-solid-aplicados-36875/77070/about/)