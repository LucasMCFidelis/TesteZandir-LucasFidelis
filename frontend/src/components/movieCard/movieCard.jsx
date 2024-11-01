import './movieCard.css'

export function MovieCard({titulo, diretor,ano}) {
    return (
        <div className='movie-card'>
            <img src="https://via.placeholder.com/300" alt="Placeholder" />

            <div className="movie-text">
                <h2>{titulo}</h2>
                <p>Diretor: {diretor}</p>
                <p>Ano: {ano}</p>
            </div>
        </div>
    )
}