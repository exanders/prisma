import {
  askToCreateDb,
  // interactivelyCreateDatabase
} from './ensureDatabaseExists'

async function main(): Promise<void> {
  // const result = await interactivelyCreateDatabase('file:dev7.db', 'apply')
  const result = await askToCreateDb('file:dev7.db', 'apply', '.')
}

main()
