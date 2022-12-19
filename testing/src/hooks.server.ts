import { start_mongo } from "./database/mongo"

start_mongo().then(() => {
	console.log("Mongo Started")
})