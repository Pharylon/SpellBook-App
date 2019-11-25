import BeyondFile, { BeyondCharacter } from "../Models/BeyondCharacter";


async function getCharacterJson(characterNumber: string): Promise<string> {
  const uri = `https://www.dndbeyond.com/character/${characterNumber}/json`;
  try {
    const response: Response = await fetch(uri);
    if (response.status !== 200) {
      alert("Error fetching Beyond File");
      return;
    }
    const responseJson: string = await response.text();
    return responseJson;
  }
  catch (err) {
    console.log("Error fetching beyond file", err);
  }
}

async function GetCharacter(characterNumber: string): Promise<BeyondCharacter> {
  const json = await getCharacterJson(characterNumber);
  const beyondFile: BeyondCharacter = JSON.parse(json);
  return beyondFile;
}

export { GetCharacter };
