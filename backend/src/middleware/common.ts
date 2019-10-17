import parser from 'body-parser';

export const handleBodyRequestParsing = 
    [
        parser.urlencoded({extended: true}),
        parser.json()
    ]