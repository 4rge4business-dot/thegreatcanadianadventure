from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:5173")
    page.screenshot(path="homepage.png")

    # Click the blog link
    page.click('a[href="/blog"]')
    page.wait_for_load_state()
    page.screenshot(path="blog.png")

    # Click the first blog post
    page.click('a[href^="/blog/"]')
    page.wait_for_load_state()
    page.screenshot(path="blog-post.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
