import {getFightsByFighterName, getFights} from './helpers/fight.helper';
import {authenticate, register} from './helpers/jwt.helper';
import Fight from './interfaces/fight/Fight.interface';
import Turn from './interfaces/fight/Turn.interface';

const main = async (): Promise<void> => {
  const jwt: string | void = await authenticate({
    username: 'Cecilio',
    password: 'password',
  });

  if (typeof jwt == 'string') {
    const message: Fight[] | void = await getFightsByFighterName(jwt, 'Örjan');
    if (message != undefined) {
      message.forEach((fight: Fight, index: number) => {
        console.log(
          `Fight #${index + 1} (Between ${fight.winner.name} and ${fight.loser.name}):`
        );

        fight.turns.forEach((turn: Turn) => {
          console.log('\t' + turn.info);
        });

        console.log(`\t${fight.winner.name} won!!!`);
        console.log();
      });
    }
  }
};

main();
