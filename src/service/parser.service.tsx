export class ParserService {

    convertFromStringToArray(value: string | undefined) {
        const result = value?.split(',');
        return result;
    }
}

export default ParserService
