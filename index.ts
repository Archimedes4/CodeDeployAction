import core from "@actions/core";
const serverEndpoint = core.getInput("endpoint")
async function main() {
  const result = await fetch(`${serverEndpoint}/update`)
  if (!result.ok) {
    core.setFailed(await result.json())
  }
}
main()