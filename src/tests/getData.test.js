const getData=require('../functions/getData.js');

describe('getData test (/getList)',()=>
{
    beforeEach(()=>
    {
        global.fetch=jest.fn(()=>Promise.resolve(
        {
            json: ()=>Promise.resolve([{id: "BTC"},{id: "ETC"}]),
            cancel: ()=>Promise.reject(new Error('Error'))
        }));
    });

    test('getData test (resolve)',async ()=>
    {
        let recieved=await getData('/getList').then(res=>res.json());
        let length=recieved.length;
        expect(length).toBeGreaterThan(0);
        expect(length).toMatchSnapshot();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(recieved).toMatchSnapshot();
    });

    test('getData test (reject)',async ()=>
    {
        await getData('/getList').then(res=>res.cancel()).
                catch(e=>
                {
                    expect(e).toEqual(new Error('Error'));
                    expect(e).toMatchSnapshot();
                });
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toMatchSnapshot();
    });

    afterEach(()=>
    {
        global.fetch=null;
    });
});

describe('getData test (/currency)',()=>
{
    let currency;
    beforeEach(()=>
    {
        currency='BTC'
        global.fetch=jest.fn(()=>Promise.resolve(
        {
            json: ()=>Promise.resolve({id: "BTC"}),
            cancel: ()=>Promise.reject(new Error('Error'))
        }));
    });

    test('getData test (resolve)',async ()=>
    {
        let recieved=await getData(`/currency/${currency}`).then(res=>res.json());
        expect(recieved.id).toEqual("BTC");
        expect(recieved.id).toMatchSnapshot();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(recieved).toMatchSnapshot();
    });

    test('getData test (reject)',async ()=>
    {
        await getData(`/currency/${currency}`).then(res=>res.cancel()).
                catch(e=>
                {
                    expect(e).toEqual(new Error('Error'));
                    expect(e).toMatchSnapshot();
                });
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toMatchSnapshot();
    });

    afterEach(()=>
    {
        global.fetch=null;
    });
});