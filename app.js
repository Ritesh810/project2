export default async function handler(req, res) {
try {
    const data = await simulateAsyncOperation();
    
    res.status(200).json({
    message: 'Async/Await demo successful!',
    data,
    });
} catch (error) {
    res.status(500).json({ error: 'User not found please try agian or invaild requst', details: error.message });
}
}

// Simulating an asynchronous function (like a DB call or API request)
async function simulateAsyncOperation() {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve({ user: 'Ritesh', status: 'Active' });
    }, 2000); // wait 2 seconds
});
}
      