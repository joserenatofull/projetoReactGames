import axios from '../axios/axios';



const pegarGames = async (salvarState) => {
// função pegar games recebe uma função para salvar o Estado

 /* Mock
 
 const _listaGames = [
      {
        "id": "1",
        "titulo": "GTA V",
        "imagem": "https://www.rockstargames.com/V/img/global/screenshots/480-3840.jpg",
        "descricao": " O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas.",
        "idGenero": "1",
        "desenvolvedor": "Rockstar North",
        "dataLançamento": "17/09/2013",
        "plataforma":  "PS5, PS4, PS3, PC, XBOX ONE, NINTENDO SWITCH"
  },
  {
    "id": "2",
    "titulo": "Red Dead Redemption 2",
    "imagem": "https://media.rockstargames.com/rockstargames-newsite/uploads/3a97890a597809ca72423972377877abe059a2fd.png",
    "descricao": "A história se passa em 1899 em uma representação ficcional do oeste, meio-oeste e sul dos Estados Unidos e acompanha o fora da lei Arthur Morgan, que precisa lidar com o declínio do Velho Oeste e sobreviver à perseguição de forças governamentais, gangues rivais e outros adversários.",
    "idGenero": "2",
    "desenvolvedor": "Rockstar Studios",
    "dataLançamento": "26/10/2018",
    "plataforma":  "PS5, PS4, PS3, XBOX ONE, XBOX 360"
  },
  
  {
    "id": "3",
    "titulo": "Manhunt 2",
    "imagem": "https://upload.wikimedia.org/wikipedia/en/0/07/Manhunt_2_Wii_Box_Art_FINAL.jpg",
    "descricao": "Situado na cidade fictícia de Cottonmouth, o jogo segue Daniel Lamb, um paciente mental sofrendo de amnésiaenquanto ele tenta descobrir sua identidade, e Leo Kasper, um assassino sociopata que guia Daniel em sua jornada. Originalmente agendado para um lançamento na América do Norte e na Europa em julho de 2007, o jogo foi suspenso pela empresa - mãe da Rockstar, Take-Two Interactive, quando foi recusada a classificação no Reino Unido e Irlanda, e recebeu uma classificação Apenas Adultos (AO) nos Estados Unidos ",
    "idGenero": "6",
    "desenvolvedor": "Rockstar London",
    "dataLançamento": "29/10/2007",
    "plataforma":  "PS2, XBOX "
  },
  
  {
    "id": "4",
    "titulo": "Max Payne 2: The Fall of Max Payne ",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/2/21/Max_Payne_2.jpg",
    "descricao": "Max Payne 2 é um jogo de tiro em terceira pessoa, no qual o jogador assume o papel de Max Payne, embora também jogue com Mona Sax em quatro capítulos. Inicialmente, a arma do jogador é uma pistola de 9mm. À medida que progride, o jogador vai acedendo a outras armas, incluindo outros revólveres, escopetas, metralhadoras, rifles de assalto, rifles de precisão e armas de arremesso.",
    "idGenero":"8",
    "desenvolvedor": "Rockstar Games",
    "dataLançamento": "14/03/2003",
    "plataforma": "PS2, PC, XBOX"
  },  
  {
    "id": "5",
    "titulo": "Midnight Club 3: Dub Edition ",
    "imagem": "https://upload.wikimedia.org/wikipedia/en/6/69/Midnight_Club_3_-_DUB_Edition_Coverart.jpg",
    "descricao": "Como as parcelas anteriores da série, o jogo é um jogo de corrida no estilo arcade e se concentra em corridas selvagens e de alta velocidade, ao invés de física e direção realistas. O nome é derivado de uma parceria entre a Rockstar e a DUB Magazine , que aparece fortemente no jogo na forma de corridas patrocinadas pela DUB e veículos personalizados da DUB como prêmio",
    "idGenero": "3",
    "desenvolvedor": "Rockstar San Diego",
    "dataLançamento": "11/04/2005",
    "plataforma": [ "PS2 , PC, XBOX"]
  }

  ]; */
  try{
    const resposta = await axios.get('v1/games')
    salvarState(resposta.data);
  //jogando essa lista no salvarState

  } catch(erro){
    console.log(`Ocorrreu um erro:${erro.message} `);
  }



};

export default pegarGames;
