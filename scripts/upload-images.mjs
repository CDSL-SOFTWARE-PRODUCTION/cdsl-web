import { put } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';
import 'dotenv/config';

const TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!TOKEN) {
    console.error('Error: BLOB_READ_WRITE_TOKEN is not set in your environment variables.');
    process.exit(1);
}

const imagesToUpload = [
    'public/testimonial/sun-chinese/1.png',
    'public/testimonial/sun-chinese/2.png',
    'public/testimonial/sun-chinese/3.png',
    'public/testimonial/sun-chinese/4.png',
    'public/testimonial/sun-chinese/5.png',
    'public/testimonial/sun-chinese/6.png',
    'public/testimonial/sun-chinese/7.png',
    'public/logo/sun-chinse-logo.png',
    'public/testimonial/gems/Fig_1_montage.png',
    'public/testimonial/gems/Fig_3_framework.png',
    'public/testimonial/gems/Fig_5_RGB.png',
    'public/testimonial/gems/Fig_6_HSVplots.png',
    'public/testimonial/gems/Fig_8_accuracy.png',
    'public/testimonial/gems/Fig_9_bestsystem.png',
    'public/testimonial/gems/Fig_10_bestexpert.png',
];

async function uploadImages() {
    console.log('Starting image upload to Vercel Blob...');
    const results = {};

    for (const imgPath of imagesToUpload) {
        try {
            const fullPath = path.resolve(imgPath);
            const fileBuffer = await fs.readFile(fullPath);
            const fileName = path.basename(imgPath);

            console.log(`Uploading ${fileName}...`);
            const { url } = await put(fileName, fileBuffer, {
                access: 'public',
                contentType: 'image/png', // You might want to detect this based on extension
                token: TOKEN,
            });

            results[imgPath] = url;
            console.log(`Successfully uploaded ${fileName}: ${url}`);
        } catch (error) {
            console.error(`Failed to upload ${imgPath}:`, error.message);
        }
    }

    console.log('\n--- Upload Mapping (Copy this to projects.ts) ---');
    console.log(JSON.stringify(results, null, 2));
}

uploadImages();
