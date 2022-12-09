# Joyless projects

#interesting #java
- https://github.com/google/schemaorg-java

## joyless-web
#JavaScript #React
Search.

- [x] `npx create-react-app joyless-web`

- Search
- Shots Indexer (Java)
- Web

```js
// Tribute search

// Example: "opinion:liked"
trigger = 'opinion';
opinions = 'disliked meh ok liked loved'.split(' ');


// Example: is:anime
trigger = 'is';
mainThings = 'film anime series cartoon'.split(' ');
```


## joyless-shots-indexer
#Java

Uses:
- Blurhash
    * https://github.com/woltapp/blurhash
    * https://github.com/woltapp/react-blurhash
- Apache Commons Codec
- ImageIO
https://docs.oracle.com/javase/8/docs/api/javax/imageio/ImageIO.html

```java
class JoylessFile {}

class JoylessIndexer {
    public List<JoylessFile> scan(String dirPath);
}
```


## joyless-myanimelist-xml
#Java
Parse MAL exports.


## joyless-betweenourworlds
#Java

Uses:
- Between Our Worlds https://betweenourworlds.org
- Apache Jena https://jena.apache.org/index.html
- HDT Java https://github.com/rdfhdt/hdt-java

---

END.
