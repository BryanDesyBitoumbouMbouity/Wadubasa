import { NextResponse } from "next/server";
import { connectToDB } from "../../../../libs/connectionMongodb";
import { Event } from "../../../../libs/models";

export async function GET(req, res) {
	//return NextResponse.json({ message: "Hello" });

	connectToDB();
	const events = await Event.find();
	return NextResponse.json({ events });
}

export async function POST(req, res) {
	try {
		connectToDB();
		const { title, description, date, place, img, alt } = await req.json();
		//Autre methode pour creer un event
		//const event = new Event({title, description, date, place, img, alt});
		//await event.save();

		await Event.create({ title, description, date, place, img, alt });

		return NextResponse.json({ message: "Event created" });
	} catch (error) {
		console.log("Erreur lors de creation d'un evenement", error);
	}
}

export async function DELETE(req) {
	const id = req.nextUrl.searchParams.get("id");
	connectToDB();
	await Event.findByIdAndDelete(id);
	return NextResponse.json({ message: "Event deleted" }, { status: 200 });
}
