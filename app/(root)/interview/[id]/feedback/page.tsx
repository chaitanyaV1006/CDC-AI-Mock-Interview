import { getCurrentUser } from '@/lib/actions/auth.action';
import { getFeedbackByInterviewId, getInterviewById } from '@/lib/actions/general.action';
import { redirect } from 'next/navigation';
import React from 'react';

interface RouteParams {
  params: { id: string };
}

const FeedbackPage = async ({ params }: RouteParams) => {
  const { id } = params;

  const user = await getCurrentUser();
  const interview = await getInterviewById(id);
  if (!interview) redirect('/');

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  if (!feedback) {
    return <div className="p-4 text-red-400 bg-black">No feedback available for this interview.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold border-b border-gray-700 pb-2">Interview Feedback</h1>

      <div className="bg-gray-800 p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold">Total Score: {feedback.totalScore}/100</h2>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Category Scores</h2>
        <div className="space-y-4">
          {feedback.categoryScores.map((category, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              <p className="text-sm text-gray-300 font-medium">Score: {category.score}/20</p>
              <p className="mt-2 text-gray-200">{category.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {feedback.areasForImprovement.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Areas for Improvement</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {feedback.areasForImprovement.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-semibold mb-2">Final Assessment</h2>
        <p className="text-gray-200">{feedback.finalAssessment}</p>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        Feedback created at: {new Date(feedback.createdAt).toLocaleString()}
      </div>
    </div>
  );
};

export default FeedbackPage;
