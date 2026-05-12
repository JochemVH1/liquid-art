# Session Learnings

## Outcome

Converted the artwork asset setup to local-only files while keeping the app pointed at `public/artwork`.

## Key Changes

- Added `public/artwork/*` to `.gitignore`.
- Kept `public/artwork/.gitkeep` so the folder stays in the repo.
- Documented the local-only asset expectation in `README.md`.

## Learnings

- If image assets are meant to stay out of Git, the app should still use stable public paths and the repo should keep only a placeholder directory.
- Ignoring a folder is not enough when files were already tracked; the tracked asset entries must be removed separately.

## Verification

- `git check-ignore -v public\artwork\session1-1.jpg public\artwork\.gitkeep`

## Notes

None
