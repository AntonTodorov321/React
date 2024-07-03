import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/games";

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    return result;
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
};

export const getLatest = async () => {
    // const query = new URLSearchParams({
    //     sortBy: '_createdOn desc',
    //     offset: 0,
    //     pageSize: 3
    // });

    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);

    return result;
}

export const edit = async (gameId, gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, gameData);

    return result;
};

export const remove = (gameId) => request.remove(`${baseUrl}/${gameId}`);