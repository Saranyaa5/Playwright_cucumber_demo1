export {};
declare global {
    namespace NodeJs{
        interface ProcessEnv {
          BROWSER: "chrome"|"firefox"|"webkit",
          ENV:"staging"| "prod" | "test",
          BASEURL: string,
          HEAD: "true" | "false"
        }
    }
}