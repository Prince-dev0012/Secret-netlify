export async function handler(event, context) {

  const message = process.env.TEST_MESSAGE || "No ENV Found";

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  };

}
