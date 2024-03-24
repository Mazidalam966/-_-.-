const {Configuration,OpenAIApi}=require('openai');

const configuration=new Configuration({apiKey:"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"})
const openai=new OpenAIApi(configuration)

export async function sendMsgToOpenAi(message){
const resp=await openai.createCompletion({
    model:'text-davinci-003',
    prompt:message,
    temperature:0.7,
    max_tokens:256,
    top_p:1,
    frequency_penalty:0,
    presense_penalty:0
});
return resp.data.choices[0].text;

}


