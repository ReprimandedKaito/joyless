import KLabel from './KLabel'

export default function KThing({thing}) {
    return (
        <article id={thing.id} className="kthing">
            <div className="__right">
            {thing.poster ?
                    // Lazy loading.
                    <img className='__poster' alt='' loading='lazy' src={`./posters/${thing.poster}`} />
                    :
                    <img className='__poster' alt='' src={`./poster-placeholder.jpg`} />
            }
            </div>
            <div className="__left">
                <h2 className="__name">{thing.name}</h2>

                <span className="__labels">
                    {Object.entries(thing.labels).map(([k,v], i) => <KLabel key={i} k={k} v={v}></KLabel>)}
                </span>

                <p className="__notes" dangerouslySetInnerHTML={{__html:thing.notesHtml}}></p>
            </div>
        </article>
    );
}
