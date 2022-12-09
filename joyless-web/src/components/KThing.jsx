import KLabel from './KLabel'

export default function({thing}) {
    return (
        <article id={thing.id} className="kthing">
            <h2 className="__name">{thing.name}</h2>
            <span className="__labels">
                {Object.entries(thing.labels).map(([k,v]) => <KLabel k={k} v={v}></KLabel>)}
            </span>
            {thing.poster? <img src={`./posters/${thing.poster}`} /> : <img src={`./poster-placeholder.jpg`} />}
            <p className="__notes" dangerouslySetInnerHTML={{__html:thing.notesHtml}}></p>
        </article>
    );
}
