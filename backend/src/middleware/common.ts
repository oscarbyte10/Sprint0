import parser from 'body-parser';
import { Router } from 'express';

export const handleBodyRequestParsing = 
    [
        parser.urlencoded({extended: true}),
        parser.json()
    ]