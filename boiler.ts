import { ActionBoiler } from "boiler-dev"

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/ssr.ts",
    sourcePath: "tsignore/ssr.ts",
  })

  actions.push({
    action: "write",
    path: "test/ssr.spec.tsx",
    sourcePath: "tsignore/ssr.spec.tsx",
  })

  return actions
}
