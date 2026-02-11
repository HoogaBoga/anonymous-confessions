import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'confessions.json');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nickname, faction, message } = body;

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400});
        }

        const newConfession = {
            nickname: nickname || 'Anonymous',
            faction: faction,
            message,
            createdAt: new Date().toLocaleString(),
        };

        let confessions = [];

        try {
            const fileData = await fs.readFile(dataFilePath, 'utf-8');
            confessions = JSON.parse(fileData);
        } catch (error) {
        }

        confessions.push(newConfession);
        await fs.writeFile(dataFilePath, JSON.stringify(confessions, null, 2));

        return NextResponse.json({ success: true, confession: newConfession });
    } catch (error) {
        console.error('Error saving confessions:', error);
        return NextResponse.json({ error: 'Failed to save confession' }, { status: 500});
    }
}
