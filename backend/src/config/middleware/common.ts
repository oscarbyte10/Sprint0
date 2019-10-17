import parser from 'body-parser';
import { Router } from 'express';

export const handleBodyRequestParsing = (router: Router) => {
    router.use(parser.urlencoded({extended: true}));
    router.use(parser.json());    
}