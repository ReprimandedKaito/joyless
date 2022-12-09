# Joyless MyAnimeList

MAL XML to Joyless Things (Java)
XML parsing.

## Pseudo

```java

interface MyanimelistParser {
    /**
     * List of Manga or Anime.
     */
    List<JoylessThing> parseXml(ReadStream input);

}

class JoylessThing extends Thing {
    abstract public List<String> getUrns();
    
    public String toMarkdownLine() {
        return
        """
            - 
                * 
        """;
    
    }

}

class Manga extends JoylessThing {
    public String getUrn() {
        return "mal:manga:{id}";
    }
}

class Anime extends JoylessThing {
    public String getUrn() {
        return "mal:anime:{id}";
    }
}

```

## Reading

- [x] [XML Parsing for Java | docs.oracle.com](https://docs.oracle.com/cd/E29542_01/appdev.1111/b28394/adx_j_parser.htm)
    * from XML Developer's Kit Programmer's Guide
    * PDF version:  https://docs.oracle.com/cd/E29542_01/appdev.1111/b28394.pdf
    * EPUB version: https://docs.oracle.com/cd/E29542_01/appdev.1111/B28394-04.epub

---

END.
