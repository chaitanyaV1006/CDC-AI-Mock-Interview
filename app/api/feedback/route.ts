'use server'

// import { feedbackSchema } from "@/constants";
// import { db } from "@/firebase/admin";
// import { google } from "@ai-sdk/google";

// export async function createFeedback(params: CreateFeedbackParams){
//     const {interviewId, userId , transcript} = params;


//     try {
//         const formattedTranscript = transcript
//             .map((sentence: {role: string; content: string;}) => (
//                 `- ${sentence.role}: ${sentence.content}\n`
//             )).join('');

//         const { object:{totalScore,categoryScores,strengths,areasForImprovement,finalAssessment} } = await generateObject({
//             model:google('gemini-2.0-flash',{
//                 structuredOutputs: false,
//             }),
//             schema: feedbackSchema,
//             prompt: `You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
//             Transcript:
//             ${formattedTranscript}

//             Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
//             -**Communication skills**: Clarity , articulation, structured responses.
//             -**Technical Knowledge**: Understanding of key concepts for the role.
//             -**Problem solving**: Ability to analyze problems and propose solutions. 
//             -**Cultural and role fit**: Alignment with company values and job role.
//             -**Confidence and clarity**: Confidence in responses, engagement, and clarity.
//             `,
//             system:"You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories.",
//         }) 
        
//         const feedback = await db.collection('feedback').add({
//             interviewId,
//             userId,
//             totalScore,
//             categoryScores,
//             strengths,
//             areasForImprovement,
//             finalAssessment,
//             createdAt: new Date().toISOString()
//         })

//         return {
//             success: true,
//             feedbackId: feedback.id 
//         }
//     } catch (e) {
//         console.log('Error saving the feedback',e)
//         return {success: false}
//     } 
// }
// app/api/feedback/route.ts

import { NextResponse } from 'next/server';
import { createFeedback } from '@/lib/actions/general.action';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await createFeedback(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in /api/feedback:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
