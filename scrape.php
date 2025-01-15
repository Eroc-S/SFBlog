<?php
// List of URLs you want to scrape
$urls = [
    'https://www.salesforceben.com/ensure-your-marketing-cloud-ip-warming-results-in-success/',
    'https://www.salesforceben.com/why-is-salesforce-line-item-management-a-challenge/',
    'https://www.salesforceben.com/salesforce-cross-object-formulas-vs-roll-up-summary-fields/',
    'https://www.salesforceben.com/5-reasons-to-pay-attention-to-salesforce-hyperforce-in-2025/'
];

// Initialize an array to hold the fetched data for each URL
$blogData = [];

// Loop through each URL
foreach ($urls as $url) {
    // Use cURL to fetch the page content
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Follow redirects
    $html = curl_exec($ch);
    curl_close($ch);

    // Check if the request was successful
    if ($html === false) {
        continue; // Skip if failed to fetch content
    }

    // Load the HTML content into a DOMDocument object
    $dom = new DOMDocument();
    libxml_use_internal_errors(true);  // Suppress warnings due to malformed HTML
    $dom->loadHTML($html);
    libxml_clear_errors();

    // Create a DOMXPath object for querying the HTML
    $xpath = new DOMXPath($dom);

    // Extract the article title (h1)
    $titleNode = $xpath->query('//h1[@class="entry-title"]');
    $title = $titleNode->length > 0 ? $titleNode->item(0)->nodeValue : 'No title found';

    // Extract the author name
    $authorNode = $xpath->query('//div[@class="author-names"]');
    $author = $authorNode->length > 0 ? $authorNode->item(0)->nodeValue : 'No author found';

    // Extract the content
    $contentNode = $xpath->query('//div[@class="entry-content"]');
    $content = $contentNode->length > 0 ? $contentNode->item(0)->nodeValue : 'No content found';

    // Store the extracted data
    $blogData[] = [
        'title' => $title,
        'author' => $author,
        'content' => $content,
        'url' => $url // Keep track of the URL
    ];
}

// Return the extracted data as a JSON object
echo json_encode($blogData);
?>
