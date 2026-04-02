$baseDir = "C:/Users/usuario/.gemini/antigravity/brain/6ae2ea24-0675-4aa4-8e24-1d8f4c9f4a0c/.system_generated/steps/"
$stepIds = @(252, 258, 265, 273, 279, 285, 291, 298)
$allQuestions = @()

foreach ($id in $stepIds) {
    $filePath = "$baseDir/$id/output.txt"
    if (Test-Path $filePath) {
        $content = Get-Content -Raw $filePath
        $json = $content | ConvertFrom-Json
        $questionsStr = $json.answer
        
        # Clean markdown wrapper if exists
        $questionsStr = $questionsStr -replace "```json`n", "" -replace "```", ""
        
        $batchQuestions = $questionsStr | ConvertFrom-Json
        foreach ($q in $batchQuestions) {
            $allQuestions += $q
        }
        Write-Host "Batch $id: Added $($batchQuestions.Count) questions."
    } else {
        Write-Error "File not found: $filePath"
    }
}

$outputJson = $allQuestions | ConvertTo-Json -Depth 10
$outputJs = "const ALL_QUESTIONS = $outputJson;"
$outputJs | Out-File -FilePath "C:/Users/usuario/.gemini/antigravity/scratch/questions.js" -Encoding utf8

Write-Host "Total questions merged: $($allQuestions.Count)"
