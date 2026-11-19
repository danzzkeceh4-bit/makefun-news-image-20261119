# The World in One Day — Thursday 19 November 2026

[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/danzzkeceh4-bit/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/danzzkeceh4-bit/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

A make.fun entry for [news-image-20261119](https://make.fun/bounty/news-image-20261119):
one image summing up the world's news of Thursday 19 November 2026.

The front page leads with the first-ever trilateral meeting of the leaders
of the United States, China and Russia in Shenzhen, on the sidelines of the
APEC summit — then GTA VI launching worldwide after 13 years, the Kerch
Bridge struck for a third time, Marib on its highest alert, Moscow's demand
that NATO return to its 1997 borders, and the rest of the day.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — a
1024&times;1024 front page rendered from `page.html` — to
`/output/entry.png`, byte for byte, so two runs always write the same bytes:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
