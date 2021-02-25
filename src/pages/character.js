import getHash from "../utlis/getHash";
import getData from "../utlis/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  const view = `
    <div class="characters-inner">
      <article class="characters-card>
        <div className="character-card-img">
          <img src="${character.image}" alt="${character.name}"/>
          <h2>${character.name}</h2>
        </div>
        <div class="character-card-description">
          <h3>Episodios: <span>${character.episode.length}</span></h3>
          <h3>Status: <span>${character.status}</span></h3>
          <h3>Species <span>${character.species}</span>:</h3>
          <h3>Gender: <span>${character.gender}</span></h3>
          <h3>Origin: <span>${character.origin.name}</span></h3>
          <h3>Last Location: <span>${character.location.name}</span></h3>
        </div>
      </article>
    </div>
  `;
  return view;
}
export default Character