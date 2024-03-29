import path from 'path';
import { fileURLToPath } from 'url'
import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
	openAnalyzer: false,
})

const nextConfig = {
	sassOptions: {
		includePaths: [ path.join(__dirname, 'src/sass') ],
		prependData: `@import "main.sass"`
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'cdn.shopify.com' }
		]
	}
};

export default withBundleAnalyzer(nextConfig)
