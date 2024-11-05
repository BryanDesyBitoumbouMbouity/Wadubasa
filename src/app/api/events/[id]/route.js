import { NextResponse } from "next/server";
import { connectToDB } from "../../../../../libs/connectionMongodb";
import { Event } from "../../../../../libs/models";

export async function GET(req, { params }) {
	const { id } = params;
	connectToDB();
	const event = await Event.findOne({ _id: id });
	return NextResponse.json({ event }, { status: 200 });
}

export async function PUT(req, { params }) {
	const { id } = params;
	connectToDB();
	const {
		title: title,
		description: description,
		date: date,
		place: place,
		img: img,
		alt: alt,
	} = await req.json();

	await Event.findByIdAndUpdate(id, {
		title,
		description,
		date,
		place,
		img,
		alt,
	});
	return NextResponse.json({ message: "Event updated" }, { status: 200 });
}
