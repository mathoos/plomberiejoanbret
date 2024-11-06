import './Tags.scss';

const Tags = ({ onTagClick, selectedTag, isHomePage }) => {
    const tags = [
        { label: "Tous", value: "all" },
        { label: "Salle de bain", value: "salle de bain" },
        { label: "Salle de douche", value: "salle de douche" },
        { label: "Cuisine", value: "cuisine" },
        { label: "Aménagement PMR", value: "pmr" },
        { label: "Mobilier", value: "mobilier" },
        { label: "Toilette", value: "toilette" }
    ];

    return (
        <section className={`accelerateurs ${isHomePage ? '' : 'realisations-page'}`}>
            <div className="accelerateurs_container">
                {tags.map((tag) => (
                    <button
                        key={tag.value}
                        className={`bouton ${selectedTag === tag.value ? "active" : ""} ${isHomePage ? 'bouton_vert' : 'bouton_noir'}`}
                        onClick={() => onTagClick(tag.value)}
                    >
                        {tag.label}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Tags;